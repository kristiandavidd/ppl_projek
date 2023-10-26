import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function Login() {
    return (
        <div className="h-screen flex flex-col">
            <div
                className="bg-cover bg-center w-full h-screen z-[10]"
                style={{
                    backgroundImage: "url('../../DSC7133.jpg')",
                }}
            >
            </div>
            <div className="bg-white flex-col flex items-center justify-center shadow-lg rounded-t-xl h-1/2 z-[20]">
                <div className="justify-center bg-white mb-64 shadow rounded-lg z-30 px-14 py-5 border-solid border-2">
                    <Typography variant="h2" className="mt-3 text-center">Login</Typography>
                    <form className="flex flex-col">
                        <Typography variant="paragraph" className="mt-6">Email</Typography>
                        <Input
                            size="lg"
                            placeholder="Masukkan email"
                            className="h-10"
                            crossOrigin=''
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="paragraph" className="mt-4">Password</Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="Masukkan password"
                            className="h-10"
                            crossOrigin=''
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Button className="mt-6" fullWidth>Login</Button>
                        <Typography className="text-center mt-2">Lupa Passowrd?
                            <a href="#" className="text-gray-400"> Klik Disini</a> 
                        </Typography>
                    </form>
                </div>
            </div>
        </div>
    );
}
