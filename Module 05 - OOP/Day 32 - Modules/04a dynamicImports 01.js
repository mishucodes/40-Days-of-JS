export function harryPotter(bookNumber)
{
    switch (Number(bookNumber))
    {
        case 1: return 'Harry Potter and the Sorcerer\'s Stone'; break;
        case 2: return 'Harry Potter and the Chamber of Secrets'; break;
        case 3: return 'Harry Potter and the Prisoner of Azkaban'; break;
        case 4: return 'Harry Potter and the Goblet of Fire'; break;
        case 5: return 'Harry Potter and the Order of the Phoenix'; break;
        case 6: return 'Harry Potter and the Half-Blood Prince'; break;
        case 7: return 'Harry Potter and the Deathly Hallows'; break;    
        default: return 'You\'ll have to wait for this one to be published'; break;
    }
}