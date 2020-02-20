import { connet } from 'react-redux';
import Searchbar from '../components/Searchbar';
import { actionLoading, actionHistory, actionStoreAPIData } from '../actions';

function mapStateToProps(state) {
    return {
        // 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: async ()=>{
            const results = await Axios.get(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Egyptian_pyramids`)
            
        }
    }
}