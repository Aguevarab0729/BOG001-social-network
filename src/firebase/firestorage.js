//Function de firestorage
export const uploadImgPost = (file, uid) => {
    const refStorage = firebase.storage().ref();
    const files = refStorage.child(`publications/ + ${uid}/${file.name}`).put(file); 

    files.on('state_changed', snapshot => {
        const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100
        console.log(porcentaje)
    },

    err => {
        console.log(err)
    },

    () => {
        files.snapshot.ref.getDownloadURL()
        .then(url => {
            localStorage.setItem('Publications', url)
        })
        .catch(err => {
            console.log('err')
        })
    })
}