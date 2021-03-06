/*
    Create a single object named "slideshow" that represents the data and functionality of a picture slideshow.
    There should be NO VARIABLES OUTSIDE THE OBJECT.
    The object should have properties for:
*/
let slideshow = {
    // 1. An array called photoList that contains the names of the photos as strings.
    photoList: ["dogs", "cats", "birds", "people", "babies"],
    // 2. An integer currentPhotoIndex that represents which photo in the photoList is currently displayed.
    currentPhotoIndex: 0,
    // 3. A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and logs the current photo name. Otherwise, log "End of slideshow".
    nextPhoto: function () {
        if (0 <= this.currentPhotoIndex && this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            this.printCurrentPhoto();
        } else {
            console.log("End of Slideshow");
            // 9. Automatically pause the slideshow if it gets to the end of the photoList while playing.
            this.pause();
        }
    },
    // 4. A prevPhoto() function that does the same thing, but backwards.
    prevPhoto: function () {
        if (0 < this.currentPhotoIndex && this.currentPhotoIndex <= this.photoList.length - 1) {
            this.currentPhotoIndex--;
            this.printCurrentPhoto();
        } else {
            console.log("Start of Slideshow");
            // 9. Automatically pause the slideshow if it gets to the end of the photoList while playing.
            this.pause();
        }
    },
    // 5. A function getCurrentPhoto() that returns the current photo from the list.
    getCurrentPhoto: function () {
        if (0 <= this.currentPhotoIndex && this.currentPhotoIndex <= this.photoList.length - 1) {
            this.printCurrentPhoto();
            return this.photoList[this.currentPhotoIndex];
        } else {
            console.log("currentPhotoIndex is not valid");
        }
    },
    // 6. Create an empty property named playInterval.
    playInterval: null,
    // 7. A play() function that moves to the next photo ever 2000ms until the end. Tip - use playInterval = setInterval(fn,ms).
    play: function (nextPhoto = true) {
        this.playInterval = setInterval(() => {
            // 10. Playing forward or backward.
            if (nextPhoto === true) {
                this.nextPhoto();
            } else {
                this.prevPhoto();
            }
        }, 2000);
    },
    // 8. A pause() function that stops the slideshow. Tip - use clearInterval(playInterval).
    pause: function () {
        clearInterval(this.playInterval);
    },
    // Print currentPhoto.
    printCurrentPhoto: function () {
        console.log(`currentPhoto is: ${this.photoList[this.currentPhotoIndex]}`);
    }
}
