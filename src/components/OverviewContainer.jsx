import data from '../../data/data.json';
import { OverviewCard } from './OverviewCard';

console.log(data.overview)

export const OverviewContainer = () => {
    return (
        <section>
            {
                data.overview.map(element => {
                    return <OverviewCard key={element.id} />
                })
            }
        </section>
        
    )
}