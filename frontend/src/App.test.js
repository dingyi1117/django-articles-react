import React from 'react';
import ReactDOM from 'react-dom';
import {
    shallow,
    mount
} from 'enzyme';
import App from './App';
import ShowArticlesList from './component/articlesList_show';
import CreateArticle from './component/article_create';
import ArticleDetail from './component/article_detail';
import UpdateArticle from './component/article_update';
import DeleteArticle from './component/article_delete';


describe('Test Main Page', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });
});


describe('Test Show Article Page', () => {
    it('renders without crashing', () => {
        shallow(<ShowArticlesList />);
    });
});


describe('Test Article Detail Page', () => {
    it('renders without crashing', () => {
        shallow( < ArticleDetail productId = "1" / > );
    });
});

describe('Test Update Article Page', () => {
    it('renders without crashing', () => {
        shallow( < UpdateArticle productId = "1" / > );
    });
});

describe('Test Update Article Page', () => {
    it('renders without crashing', () => {
        shallow(<UpdateArticle/>);
    });
});