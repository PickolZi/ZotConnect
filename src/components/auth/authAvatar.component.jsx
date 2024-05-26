import { Avatar, Button } from "@mui/material";


const AuthAvatar = ({user, setOpenSignInModal, setOpenSignUpModal}) => {
    return (
        <div 
            className="z-[999] fixed right-4 top-4"
        >
            {
                user ? 
                <Avatar 
                    alt="User profile picture"
                /> :
                <Button 
                    variant="contained"
                    onClick={() => setOpenSignInModal(true)}
                >
                    Sign In
                </Button>
            }
        </div>
    )
}

export default AuthAvatar;