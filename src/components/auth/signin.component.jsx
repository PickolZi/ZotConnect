import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import {Link} from '@mui/material';
import { Button } from '@mui/material';

import { signInUserFirebase } from '../../utils/firebase_auth';


const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //   width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

const SignInModal = ({user, setUser, openSignInModal, setOpenSignInModal, setOpenSignUpModal}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleUserSignIn = async () => {
        await signInUserFirebase(email, password).then((res) => {
            setUser(res)
            setEmail("")
            setPassword("")
            setOpenSignInModal(false)
            setError(false)
        }).catch((err) => {
            console.log(err)
            setError(true)
        })
    }

    return (
        <Modal
            open={openSignInModal}
            onClose={() => setOpenSignInModal(false)}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Sign in to ZotConnect
                </Typography>

                {/* Email Address */}
                <TextField 
                    label="Email Address" 
                    variant="outlined" 
                    value={email}
                    onChange={(event) => {setEmail(event.target.value)}}
                    required={true}
                    error={error}
                />

                {/* Password field */}
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => {setPassword(event.target.value)}}
                    required={true}
                    error={error}
                />

                {/* Redirect to signup */}
                <Link 
                    onClick={() => {
                        setOpenSignInModal(false);
                        setOpenSignUpModal(true);
                    }}
                    className='cursor-pointer'
                >
                    Need an account?
                </Link>

                {/* Submit button */}
                <Button 
                    variant="contained"
                    onClick={() => handleUserSignIn()}
                >
                    Sign in
                </Button>
            </Box>
        </Modal>
    );
}

export default SignInModal;