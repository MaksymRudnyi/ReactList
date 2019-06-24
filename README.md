## What can be improved

1. Store data in remote data store (not JSON) such as MySql, DynamoDB.
2. Fetch data from server using REST or GraphQL.
3. Search and filter data should be moved from client to server. To improve the speed we can use ElasticSearch. 
In this case we'll remove complex calculations from client.
4. Add pagination or virtualization for companies list. Right now there aro not a big number of record, but when it will be increased we should show just a portion.
5. Configure CI/CD (Travis CI is fine for such small app). For one developer in a team, it's redundant. Pre-push, linting and tests are configured. CI is a best practice.
6. In case we save data in JSON on client side, we can implement PWA and offline mode.
7. Add unit tests for hooks and increase coverage (had no time to do it).
8. Add Google Analytics for usage monitoring and NewRelic for performance monitoring.
9. Implement loader with critical CSS (in case data are loaded from server).
10. Add lazy loading for images (right now images are not added).
11. From UI/UX perspective I would hide Specialities filter and add collapse button to show/hide this filter.
12. Deploy on staging. Can be used: Google Firebase, AWS S3 or GitHub pages.
13. Updated documentation in app/README.md
14. Add images instead of black squares. It was in requirements but didn't want to spend additional time on this.
15. Develop and provide code convention. Even for one developer it might be a good reminder how to deliver a high-quality solution. Include Git strategy. Right now one master branch is used only.
16. Refactor HTML-markup. Make it more semantic, add accessibility improvement, add micro data for SEO (company description).
17. Save search query and filter in URL. This option will provide improved SEO and user can share page with the predefined search results.
18. Implement multiple languages. Right now it's just English. react-intl can be used.
