import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function Login() {
    return (
        <div className="h-screen flex flex-col z-0 bg-cover bg-center relative" style={{backgroundImage: "url('../../DSC7133.jpg')",}}>\
            <div className="h-1/2"></div>
            <div className="flex-col flex items-center justify-center">
                <div className="absolute justify-center bg-white align-middle shadow rounded-lg z-30 px-14 py-5 border-solid border-2 w-auto">
                    <Typography variant="h2" className="mt-3 text-center">Login</Typography>
                    <form className="flex flex-col">
                        <Typography variant="paragraph" className="mt-6">Email</Typography>
                        <Input
                            crossOrigin=""
                            size="lg"
                            placeholder="Masukkan email"
                            className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900 w-80"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            />
                        <Typography variant="paragraph" className="mt-4">Password</Typography>
                        <Input
                            crossOrigin=""
                            type="password"
                            size="lg"
                            placeholder="Masukkan password"
                            className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900 w-80"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Button className="mt-6" fullWidth>Login</Button>
                        <Typography className="text-center mt-2">Lupa Password?
                            <a href="#" className="text-gray-400"> Klik Disini</a> 
                        </Typography>
                    </form>
                </div>
            </div>
            <div className="bg-white flex-col flex items-center justify-center shadow-lg rounded-t-3xl h-1/2 z-10">
            </div>
        </div>
    );
}
