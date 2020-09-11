import React, { Component } from 'react';
import '../css/blog.css';
import data from './data.json';
//Sept 3
import WorkLifeBalanceSept3 from './work-life-balance/WorkLifeBalanceSept3';
import SelfCareSept3 from './self-care/SelfCareSept3';
import OrganizationSept3 from './organization/OrganizationSept3';
import AcademiaSept10 from './academia/AcademiaSept10';
import AcademiaSept9 from './academia/AcademiaSept9';

export default class BlogPost extends Component {
    render() {
        const articleId = this.props.match.params.article;
        return(
            <div className="blog-post-container">
                {   
                    articleId === "work-life-balance-sept-3-2020" && 
                    <WorkLifeBalanceSept3   
                        title={data["work-life-balance"]["sept-3-2020"].title} 
                        author={data["work-life-balance"]["sept-3-2020"].author} 
                        date={data["work-life-balance"]["sept-3-2020"].date} 
                        category={data["work-life-balance"]["sept-3-2020"].category}/>    }
                {
                    articleId === "self-care-sept-3-2020" && 
                    <SelfCareSept3
                        title={data["self-care"]["sept-3-2020"].title} 
                        author={data["self-care"]["sept-3-2020"].author} 
                        date={data["self-care"]["sept-3-2020"].date} 
                        category={data["self-care"]["sept-3-2020"].category}/> }
                {
                    articleId === "organization-sept-3-2020" && 
                    <OrganizationSept3
                        title={data["organization"]["sept-3-2020"].title} 
                        author={data["organization"]["sept-3-2020"].author} 
                        date={data["organization"]["sept-3-2020"].date} 
                        category={data["organization"]["sept-3-2020"].category}/> }

                {
                    articleId === "academia-sept-9-2020" && 
                    <AcademiaSept9
                        title={data["academia"]["sept-9-2020"].title} 
                        author={data["academia"]["sept-9-2020"].author} 
                        date={data["academia"]["sept-9-2020"].date} 
                        category={data["academia"]["sept-9-2020"].category}/> }

                {
                    articleId === "academia-sept-10-2020" && 
                    <AcademiaSept10
                        title={data["academia"]["sept-10-2020"].title} 
                        author={data["academia"]["sept-10-2020"].author} 
                        date={data["academia"]["sept-10-2020"].date} 
                        category={data["academia"]["sept-10-2020"].category}/> }

                <a href="/blog"> Go Back to All Blogs </a>
            </div>
        )
    }
}