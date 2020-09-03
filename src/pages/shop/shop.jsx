import React from 'react'
import SHOP_DATA from './shopdata'
import Collectionpreview from '../../components/previewcollection/previewcollection'
class Shoppage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        const {collections}=this.state;
        return(
            <div className='shoppage'>
                {
                collections.map(({id, ...otherCollectionProps})=>
               ( <Collectionpreview key={id} {...otherCollectionProps}/>
               ))
                }
            </div>
        )
    }
}
export default Shoppage