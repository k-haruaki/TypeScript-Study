type IdDisplay = {
    id: string,
    display: string
}

const list: IdDisplay[] = [
    {
        id: 'foo',
        display: 'Foo Select'
    },
    {
        id: 'bar',
        display: 'Bar Select'
    },
]

const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex);