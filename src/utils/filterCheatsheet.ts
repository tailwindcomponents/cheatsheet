import Category from '../modules/models/category';
import Subcategory from '../modules/models/subcategory';

// If the search text appears in a subcategory's title or description the whole
// table is kept, otherwise only the rows containing the text are kept.
// Matching is case-insensitive.
export const filterCheatsheet = (cheatsheet: Category[], text: string): Category[] => {
    const needle = text.toLowerCase();
    const matches = (value: string) => value.toLowerCase().includes(needle);

    return cheatsheet.map((category: Category) => ({
        ...category,
        content: category.content.map((subcategory: Subcategory) => ({
            ...subcategory,
            table: matches(subcategory.title) || matches(subcategory.description)
                ? subcategory.table
                : subcategory.table.filter(row => row.some(matches)),
        })),
    }));
};
