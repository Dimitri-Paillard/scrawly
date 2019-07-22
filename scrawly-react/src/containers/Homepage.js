import { connect } from "react-redux";
import { updateSlug } from "../actions/scrawly";
import Homepage from '../components/Homepage';

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        slug: state.scrawly.scrawl.slug
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)