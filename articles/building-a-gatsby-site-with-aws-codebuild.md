---
title: Building a Gatsby site on AWS CodeBuild
published: true
description: How you could automatically build a Gatsby site with AWS CodeBuild.
tags: javascript,AWS,static site,AWS CodeBuild,AWS S3,AWS CodeBuild,Gatsby,CI
thumbnail: https://cdn.nicholasgriffin.dev/codepipeline-thumbnail.png
header: https://cdn.nicholasgriffin.dev/images/Hosting+my+static+site+on+S3+with+AWS+CodePipeline/Screenshot+2019-05-31+at+17.59.07.png
ctime: 2020-01-25
---

Hey! It's been a while since I posted anything on here. Sorry about that, we all know how it goes sometimes.

Anyway, today I'm posting a quick log about how you could automatically build your Gatsby site on AWS CodeBuild, which is an automated CI
build tool that can run a set of scripts in order to build your application through Amazon Web Services (AWS).

This can also link directly to a CodePipeline flow, allowing you to make the entire process of building a Gatbsy
site automated.

## But what is Gatsby anyway 🤔?

Gatsby is probably one of the best tools that us developers have been given in recent years.

It's a static site generator that allows you to build fully-featured, static websites with a React based build system. Developers
around the world are using it for a range of things from their personal websites all to way up to fully blown
applications.

And the best part is that it is completely free.

[Find out more](https://www.gatsbyjs.org/)

## Setting up your Gatsby project

I'm going to assume that you've already been through the process of creating your Gatsby site and now
you are simply looking to get something live.

The first step in doing that is to add a buildspec.yml file to your Gatsby project's folder.

This file defines what AWS CodeBuild should do when it has been triggered.

The following example will first install Gatsby, then install your projects dependencies, then build your Gatsby project and
then finally push the build to your S3 bucket.

```yaml
version: 0.2

phases:    
    install:        
        runtime-versions:
            nodejs: 10
        commands:            
            - 'touch .npmignore'            
            - 'npm install -g gatsby'    
    pre_build:        
        commands:            
            - 'npm install'    
    build:        
        commands:            
            - 'npm run build'    
    post_build:        
        commands:            
            - 'aws s3 sync "public/" "s3://<--YOUR_S3_BUCKET_NAME-->" --delete --acl "public-read"'
artifacts:    
    base-directory: public    
    files:        
        - '**/*'    
    discard-paths: yes
```

## Creating an AWS CodePipeline flow

I've already talked about this process on a [different post here](https://nicholasgriffin.dev/post-single/simple-static-site-hosting-with-aws)
so I'm only going to summarize a few key points here.

Feel free to head over to that article and then come back, but be sure to come back here for the Build stage process, as
that is slightly different.

Here are the basic steps:

- Create a Github or AWS CodeCommit repo if you haven't already.
- Create an S3 bucket
- Create a new CodePipeline flow for your application, linking to your repo and buildspec file.
- Enjoy.

When you get to the 'Add build stage' of the CodePipeline creation, you'll need to setup your AWS CodeBuild project.

If you haven't already, you should click the create project button to open the creation panel
in a new window.

![CodePipeline - Create Build](https://cdn.nicholasgriffin.dev/images/building-a-gatsby-site-with-aws-codebuild/create-build-project.png)

The next few steps are really quite simple.

At the top of the page, give your project a name that matches your project name, from here scroll to the environment
section.

In this section, you need to do the following:

- Select 'Managed image'
- Choose Ubuntu as the operating system
- Choose the standard runtime
- Select the 'aws/codebuild/standard:2.0' image option.

![CodePipeline - Create Build (Env)](https://cdn.nicholasgriffin.dev/images/building-a-gatsby-site-with-aws-codebuild/create-build-project-env.png)

Everything else should be fine from here, just ensure that you have 'Use a buildspec file' selected.
This will make CodeBuild use the buildspec.yml file from your repo.

![CodePipeline - Create Build (Buildspec)](https://cdn.nicholasgriffin.dev/images/building-a-gatsby-site-with-aws-codebuild/create-build-project-buildspec.png)

Once your done, hit the 'Continue to CodePipeline' button to return to the CodePipeline creation process.

From here, all you need to do is finish off the creation fo CodePipeline and you're done.

You now have a full CI build system for your Gatsby project that will automatically build and publish
whenever you commit to your selected repo!

![WOW](https://media.giphy.com/media/dSetRSJcR3PGqkvjRg/giphy.gif)
