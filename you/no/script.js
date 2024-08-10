document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    const handleScroll = () => {
        const textElements = document.querySelectorAll('.text p');
        textElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;
            const middleOfElement = rect.top + elementHeight / 2;

            if (middleOfElement < windowHeight && middleOfElement > 0) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
        });
    };

    container.addEventListener('scroll', handleScroll);

    // Trigger the scroll handler on load to set initial visibility
    handleScroll();
});
    