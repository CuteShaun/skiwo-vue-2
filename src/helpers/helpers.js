export const getSortedList = (charactersList = [], sortQuery = "") => {
    if (sortQuery.toLowerCase() === "name") {
        return charactersList.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return -1;
            }
            if (a.name.first > b.name.first) {
                return 1;
            }
            return 0;
        });
    }

    if (sortQuery.toLowerCase() === "age") {
        return charactersList.sort((a, b) => a.dob.age - b.dob.age);
    }

    return charactersList;
};

export const getFilteredList = (charactersList = [], searchText = "") => {
    const filtered = charactersList.filter((item) => {
        if (searchText === "") {
            return item;
        }

        return `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`.includes(
            searchText
        );
    });

    return filtered;
};
