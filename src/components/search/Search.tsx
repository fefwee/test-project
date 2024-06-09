import React, {FC, useState} from 'react';
import './style/search.scss';

interface SearchProps {
    onSearch: (value: string) => void;
}


const Search: FC<SearchProps> = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="form">
            <form className="form">
                <div className="castom-input">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Найти авто"
                    />
                </div>
            </form>
        </div>
    );
};

export default Search;
