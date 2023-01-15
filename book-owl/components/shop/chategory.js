import ScrollContainer from 'react-indiana-drag-scroll';
import { filter } from '../../constants/filter';

const Chategory = () => {
    return(
        <ScrollContainer className="scroll-container flex ml-10 mb-10 gap-6 flex-nowrap scrollbar-hide text-shingle-fawn-dark select-none whitespace-nowrap overflow-x-auto last:mr-auto">
            {filter.chategories.items.map((option) => (
                <button className="bg-grey rounded-full px-10 py-2 text-base hover:bg-swamp-green/[.4] active:bg-swamp-green/[.6]">{option}</button>
            ))}
        </ScrollContainer>   
    );
};

export default Chategory;