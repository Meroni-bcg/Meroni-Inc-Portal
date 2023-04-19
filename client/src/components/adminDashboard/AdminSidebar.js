








const AdminSidebar = (props) => {
    const navigate = useNAvigate();
    const logout = async () => {
        const res = await fetch('/logout')
        props.setToastCondition({
            status: 'success',
            message: 'Log Out Successful!',
        });
        props.setToastShow(true);
        navigate('/');
}};