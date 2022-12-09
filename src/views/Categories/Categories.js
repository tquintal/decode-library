import Context from '../../context/context';
import { useContext } from 'react';
import classes from './Categories.module.css';
import Search from '../../components/Search/Search';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
import CategoryDetails from './CategoryDetails/CategoryDetails';

function Categories() {
    const context = useContext(Context);
    const setSearchHandler = event => {
        context.setSearch(event.target.value);
    };

    const selectCategoryHandler = event => {
        context.setSelectedCategory(event.target.innerText);
    };

    return <div className={classes['categories-container']}>
        {context.selectedCategory !== '' ? <CategoryDetails /> :
            <div className={classes['categories']}>
                <h1>Que categorias é que procura?</h1>
                <Search
                    placeholder='Pesquise um livro'
                    value={context.search}
                    onChange={setSearchHandler}
                    autoFocus
                />
                <div className={classes['category-list-container']}>
                    {context.categories.map(category => category.toLowerCase().includes(context.search.trim().toLowerCase()) &&
                        <SecondaryButton
                            key={category}
                            content={category}
                            style={{ width: '254px' }}
                            onClick={selectCategoryHandler}
                            focus
                        />
                    )}
                </div>
            </div>
        }
    </div>
};

export default Categories;
