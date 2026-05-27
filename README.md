## SPRINGISH CUCUMBER PLAYWRIGHT

#### OVERVIEW
Idea is that this sample framework will leverage some of the most powerful concepts from Springboot. Now Sprintboot is primarily within Java so, it is needed that some of useful concepts could applied over here.

- In Page objects, instead of @Component/@Service, constructor will be used.
- To Create Dependancy Injection AKA @Configuration we use a baseTest class in which we will use base,extend<PAGE_OBJECT_List>
- In actual test we will use baseTest class and directly use initited pageObjects, to give a @Autowired effect
- playwright.config.ts will be use instead of application.yml
- We have to use Active profiles we will use multiple .env files
- 