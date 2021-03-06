import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class ScrawlNew extends Component {

    handleSubmit(event) {
        event.preventDefault();
        if (!this.props.loading) {
            this.props.scrawlyCreate({
                    title: this.props.scrawl.title,
                    slug: this.props.scrawl.slug,
                }
            );
        }
    }


    render() {

        if (this.props.id){
            return <Redirect to={"/scrawledit/" + this.props.scrawl.slug}/>
        }

        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <label htmlFor="title">Titre</label>
                        <input type="text" id="title" value={this.props.scrawl.title} placeholder="Scrawl Title" onChange={event => this.props.updateTitle(event.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="slug">Slug</label>
                        <input type="text" id="slug" value={this.props.scrawl.slug} placeholder="Scrawl Title" onChange={event => this.props.updateSlug(event.target.value)}/>
                    </div>
                    <button type="submit" className="button button-primary">
                        <i className={"fa " + (this.props.loading ? "fa-spinner fa-pulse" : "fa-arrow-right")}/>
                        Create and add new dates
                    </button>
                </form>
            </div>
        );
    }
}

export default ScrawlNew;