const bookUl = document.getElementById('book-ul');
let currentPageIndex = 0;
function autoFlipPage() {
    const liElements = bookUl.querySelectorAll('li');
    if (currentPageIndex < liElements.length - 1) {
        liElements[currentPageIndex].style.transform = 'rotateY(-180deg)';
        currentPageIndex++;
        const transitionTime = (currentPageIndex - 1) * 0.3 + 0.5;
        const nextPageLi = liElements[currentPageIndex];
        nextPageLi.style.transform = 'rotateY(-' + (28 - 4 * currentPageIndex) + 'deg)';
        nextPageLi.style.transition = `${transitionTime}s`;
        setTimeout(() => {
            nextPageLi.style.transform = `rotateY(-180deg)`;
        }, transitionTime * 1000);
        setTimeout(() => {
            autoFlipPage();
        }, transitionTime * 1000);
    } else {
        window.location.href ='./other page/index2.html';
    }
}
bookUl.addEventListener('click', () => {
    autoFlipPage();
});
//自动翻页跳转，当图片翻到最后一页时跳转到主页面