import './UserName.css';

function UserName({fullName}: {fullName: string}) {

    function getInicial(name: string): string{
        let array = name.split(" ");
        return array.reduce((res, item) => {
            return res + item[0]
        }, "")
    }
    return (  
        <>
            <div className='container-username'>
                <div className='container-username__inicial'>{getInicial(fullName)}</div>
                <div className='container-username__fullname'>{fullName}</div>
            </div>
        </>
    );
}

export default UserName;