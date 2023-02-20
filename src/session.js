/**
 *
 * @param {String} storeName
 * @returns
 */
const getSessionObject = (storeName) => {
    const retrieveObject = localStorage.getItem(storeName)
    if (!retrieveObject) return false
    return JSON.parse(retrieveObject)
}
/**
 *
 * @param {String} storeName
 * @param {Object} objectToStore
 */
const setSessionObject = (type= "", storeName, objectToStore) =>
{
    let storageValue = {};
    storageValue.persos = []
    storageValue.comics = []

    if(localStorage.getItem('favoris')){
        storageValue = getSessionObject('favoris');
    }    
    if(type === "persos"){
        storageValue.persos.push(objectToStore)
        localStorage.setItem("favoris",JSON.stringify(storageValue))
    }else if(type === "comics"){
        storageValue.comics.push(objectToStore)
        localStorage.setItem("favoris",JSON.stringify(storageValue))
    }else{
        storageValue = JSON.stringify(objectToStore)
        localStorage.setItem(storeName,storageValue)
    }
}
/**
 *
 * @param {String} storeName
 */
const removeSessionObject = (storeName) => {
    localStorage.removeItem(storeName)
}

export { getSessionObject, setSessionObject, removeSessionObject}
