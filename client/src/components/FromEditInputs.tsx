import React, { FC, useRef, ChangeEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { updateUser } from '../redux/actions/userAction';

interface IStateUserInput {
    name: string;
    phone: string;
    email: string;
    image: any;
}

const FormEditInputs: FC = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.users);
    const initialInputState = {name:"", phone: "", email: "", image: ""}

    const [usersInput, setUserInput] = useState<IStateUserInput>(initialInputState);
    const imgRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const inputFileRef = useRef<HTMLInputElement>(null!);

    const loadingFile = (e: ChangeEvent<HTMLInputElement>): void => {
        setUserInput({
            ...usersInput,
            [e.target.name]: e.target.files[0],
        });
        const file = inputFileRef.current.files[0];
        if (file) {
            const reader = new FileReader();
            imgRef.current.style.display = 'block';
            textRef.current.style.display = 'none';

            reader.addEventListener('load', function () {
                imgRef.current.setAttribute('src', this.result as string);
            });
            reader.readAsDataURL(file);
        } else {
            imgRef.current.style.display = null;
            textRef.current.style.display = null;
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput({
            ...usersInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', usersInput.name);
        formData.append('email', usersInput.email);
        formData.append('phone', usersInput.phone);
        formData.append('image', usersInput.image);

        const formDataWithoutImage = new FormData();
        formDataWithoutImage.append('name', usersInput.name);
        formDataWithoutImage.append('email', usersInput.email);
        formDataWithoutImage.append('phone', usersInput.phone);
        
        if (!usersInput.email || !usersInput.name || !usersInput.phone ) {
            console.log('all fields is require');
        } else {

            if (inputFileRef.current.files[0]) {
                dispatch(updateUser(user._id, formData));
                setUserInput(initialInputState);
                //window.location.reload()
            } else {
                dispatch(updateUser(user._id, formDataWithoutImage));
                setUserInput(initialInputState);
            }
        }
    };

    useEffect(() => {
        const { name, phone, email, image } = user;
        setUserInput({name, phone, email, image});
        imgRef.current.setAttribute('src', "/uploads/" + user.image);
        imgRef.current.style.display = 'block';
        textRef.current.style.display = 'none';
    }, [])

    return (
        <form className="py-4 px-2" onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Username"
                    onChange={handleChange}
                    value={usersInput.name}
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={usersInput.email}
                />
            </div>
            <div className="mb-3">
                <input
                    type="phone"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="phone"
                    placeholder="9112340234"
                    onChange={handleChange}
                    value={usersInput.phone}
                />
            </div>
            <div className="input-group mb-3">
                <input
                    type="file"
                    className="form-control"
                    ref={inputFileRef}
                    onChange={loadingFile}
                    name="image"
                />
            </div>
            <div className="card d-flex flex-row justify-content-center align-items-center mb-2 image__preview-wrap">
                <img
                    ref={imgRef}
                    src=""
                    className="card-img-top image__preview-img"
                    alt="..."
                />
                <span className="image__preview-text" ref={textRef}>
                    Image preview
                </span>
            </div>

            <button type="submit"
                className="btn btn-success d-block w-100"
                >
                Update Record
            </button>
        </form>
    );
};

export default FormEditInputs;
