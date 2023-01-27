const ImageModule = (function() {

    let imageArray = [];
    imageArray[0] = './img/aho1.png';
    imageArray[1] = './img/aho2.png';
    imageArray[2] = './img/aho3.png';
    imageArray[3] = './img/aho4.png';
    imageArray[4] = './img/aho5.png';

    let currentPosition = 0;

    const getCurrentPosition = () => {
        return currentPosition;
    }

    const getPreviousImage = () => {
        let nextPosition = currentPosition - 1;
        if(currentPosition > 0) {
            if(nextPosition === 0){
                currentPosition = 0;
            } else {
                currentPosition -= 1;
            }
            return currentPosition;
        } else {
            currentPosition = imageArray.length -1;
            return currentPosition;
        }
    }

    const getNextImage = () => {
        let nextPosition = currentPosition + 1;
        if(currentPosition < imageArray.length) {
            if(nextPosition === imageArray.length){
                currentPosition = 0;
            } else {
                currentPosition += 1;
            }
            return currentPosition;
        } else {
            currentPosition = 0;
            return currentPosition;
        }
    }

    const getArrayCount = () => {
        return imageArray.length;
    }
    
    const getSelectedImage = (i) => {
        currentPosition = i;
        return imageArray[i];
    }

    const getImageAtIndex = (index) => {
        return imageArray[index];
    }

    const addPosition = () => {
        let nextPosition = currentPosition +=1;
        if(nextPosition < imageArray.length) {
            currentPosition = nextPosition;
        } else {
            currentPosition = 0;
        }
    }
    
    return {
        getCurrentPosition,
        getPreviousImage,
        getNextImage,
        getArrayCount,
        getSelectedImage,
        getImageAtIndex,
        addPosition,
    }
    
    })();
    
    export {ImageModule}