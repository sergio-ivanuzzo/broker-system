class LocalStorageService {

    static get_from_storage(key, initialValue=[]) {
        let item = window.localStorage.getItem(key);
        let result = initialValue;
        if (item) {
            try {
                result = JSON.parse(window.localStorage.getItem(key));
            } catch {
                result = item;
            }
        }

        return result;
    }

    static save_to_storage(key, newItems) {
        newItems = (Array.isArray(newItems)) ? JSON.stringify(newItems) : newItems;
        window.localStorage.setItem(key, newItems);
    }
}

export default LocalStorageService;