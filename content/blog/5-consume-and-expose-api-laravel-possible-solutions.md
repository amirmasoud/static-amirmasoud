---
title: Consume and Expose API – Laravel possible solutions
tags: Backend Tips
createdAt: June 12, 2020
---

## How to consume APIs inside Laravel?

If you want to fetch, save, crawl, or fire a one-time request to a remote server that exposes API, there are a variety of options for Laravel. An example use-case would be updating the IMDB rating for a batch of movies and series for your film listing web application.

The popular ones are:

1. *Guzzle*: You can learn more about how to use it with Laravel HTTP client wrapper in Laravel Doc.
2. *Curl*: Another powerful option is curl, you can use it directly with PHP cURL library, or you can use this Laravel package by Ixudra.
3. *zttp*: Zttp is another wrapper around Guzzle which they describe themselves as `A developer-experience focused HTTP client, optimized for most common use cases.` if you don’t need to send any crazy complex request to your remote, Zttp can be your friend.

### Things to keep in mind

1. Always save your remote server credential in `.env` file. Read more about it on Laravel Doc.
2. Always check for any error that your remote might throw, it can be as much as YouTube API errors or as little as just access forbidden (403) and not found error (404).

**Heads Up!** if the API you are going to consume in your application is well-known and complex, there is a high chance that someone else has already developed a library to just work with that API, like this [Laravel package](https://github.com/alaouy/Youtube) by [Mustapha Alaouy](https://github.com/alaouy) that specifically calls YouTube API.

## How to expose APIs from Laravel?

When you expose one or more endpoints from your application to the world, other users can consume your API to fetch what they are looking for. An example would be to expose all posts of your blog to be consumed by your mobile application team and be shown the posts in the native UI.

A great walkthrough on how to write REST API in Laravel can be found in this [blog post](https://www.twilio.com/blog/building-and-consuming-a-restful-api-in-laravel-php) in the Twilio blog by Micheal Okoh. Which clearly explains how to do so step by step in Laravel.

If you want to learn more about REST development and be standard, I recommend reading [this article](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/) on Stack Overflow blog by [John Au-Yeung](https://stackoverflow.blog/author/john-au-yeung/) and checking out [json:api](https://jsonapi.org/) website for following best practices.

Other than the REST API option, you can consider [GraphQL](https://graphql.org/) for the fast development of your APIs as it offers query-specific requirements at the frontend. You can also use this [GraphQL package for Laravel](https://github.com/rebing/graphql-laravel) and match it with [Hasura](https://hasura.io/) for rapid backend development.

**Heads Up!** If you want to test your API or someone else’s API, you can use [Postman](https://www.postman.com/) as it has matured dramatically over the past few years to support different requests.
