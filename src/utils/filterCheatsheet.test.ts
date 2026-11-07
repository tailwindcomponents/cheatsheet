import { filterCheatsheet } from './filterCheatsheet';

const data: any[] = [{
    title: 'Layout',
    content: [
        { title: 'Container', description: 'Fixes width', table: [['container', 'width: 100%'], ['sm', 'max-width: 640px']] },
        { title: 'Flex', description: 'Flexbox', table: [['flex', 'display: flex']] },
    ],
}];

test('keeps whole table when title or description matches, ignoring case', () => {
    const result = filterCheatsheet(data, 'CONTAINER');
    expect(result[0].content[0].table).toHaveLength(2);
    expect(result[0].content[1].table).toHaveLength(0);
});

test('filters rows when only cells match', () => {
    const result = filterCheatsheet(data, 'max-width');
    expect(result[0].content[0].table).toEqual([['sm', 'max-width: 640px']]);
});

test('empty search keeps everything', () => {
    expect(filterCheatsheet(data, '')).toEqual(data);
});
