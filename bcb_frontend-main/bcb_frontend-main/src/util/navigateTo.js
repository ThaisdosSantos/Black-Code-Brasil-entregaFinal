export const navigateTo = (navigate, url)=>{
    navigate(url);
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}