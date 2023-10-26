import { useRouter } from 'next/router';

interface NavProps {
    data: {
        title: string;
        link: string;
        svg: JSX.Element;
    }
}

export default function NavButton(props: NavProps) {
    const { data } = props;
    const router = useRouter();
    return (
        <li>
            <button type="button" className="text-white flex p-2" onClick={() => router.push(data.link)}>
                <svg className="w-6 h-6 mb-1 text-blue-300 group-hover:text-white group-focus:text-blue-200 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {data.svg}
                </svg>
                <span className="text-white group-hover:text-white group-focus:text-blue-200">{data.title}</span>
            </button>
        </li>
    )
}