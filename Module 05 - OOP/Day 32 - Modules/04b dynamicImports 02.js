export function dune(bookNumber)
{
    switch (Number(bookNumber))
    {
        case 1: return 'Dune'; break;
        case 2: return 'Dune Messiah'; break;
        case 3: return 'Children of Dune'; break;
        case 4: return 'God Emperor of Dune'; break;
        case 5: return 'Heretics of Dune'; break;
        case 6: return 'Chapterhouse: Dune'; break;
        case 7: return 'Hunters of Dune'; break;    
        default: return 'You\'ll have to wait for this one to be published'; break;
    }
}