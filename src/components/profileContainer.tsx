interface ProfileDataItem {
    title: string;
    value: string;
}

interface ProfileContainerProps {
    data: any;
    role: string;
}

export default function ProfileContainer({ data, role }: ProfileContainerProps) {
    const isMahasiswa = role === 'mhs';
    const isDoswal = role === 'doswal';
    const isAdmin = role === 'admin';
    
    const leftData = isMahasiswa
        ? data[role].slice(2, 7) // Slice first 6 items for Mahasiswa
        : (isDoswal? data[role].slice(2, 8) : data[role].slice(2, 8))
    
    const rightData = isMahasiswa
        ? data[role].slice(7) // The remaining items for Mahasiswa
        : (isDoswal? data[role].slice(8) : data[role].slice(8))

    return (
        <div className="flex gap-4">
            <div className="bg-blue-50 w-full text-sm mt-5 shadow-lg shadow-blue-500/20 rounded-lg p-4">
                {leftData.map((item: { title: string; value: string }) => (
                    <div key={item.title}>
                        <p className="font-light text-[12px]">{item.title}</p>
                        <p className="mb-2">{item.value}</p>
                    </div>
                ))}
            </div>
            <div className="bg-blue-50 w-full text-sm mt-5 shadow-lg shadow-blue-500/20 rounded-lg p-4">
                {rightData.map((item: { title: string; value: string }) => (
                    <div key={item.title}>
                        <p className="font-light text-[12px]">{item.title}</p>
                        <p className="mb-2">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
