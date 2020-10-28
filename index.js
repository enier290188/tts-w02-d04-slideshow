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
    // Print currentPhoto.
    currentPhoto: function () {
        console.log("currentPhoto is: " + this.photoList[this.currentPhotoIndex]);
    },
    // 3. A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and logs the current photo name.
    // Otherwise, log "End of slideshow".
    nextPhoto: function () {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            this.currentPhoto();
        } else {
            console.log("End of Slideshow");
        }
    }
}
