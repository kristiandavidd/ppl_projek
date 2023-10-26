interface ProfileDataItem {
    title: string;
    value: string;
}

interface ProfileContainerProps {
    data: ProfileDataItem[];
}

export default function ProfileContainer({ data }: ProfileContainerProps) {
    return (
        <div className="bg-blue-50 w-full text-sm mt-5 shadow-lg shadow-blue-500/20 rounded-lg p-4">
            {data.map((item, index) => (
                <>
                    <p className="font-light text-[12px]">{item.title}</p>
                    <p className="mb-2">{item.value}</p>

                </>
            ))}
        </div>
    )
}
