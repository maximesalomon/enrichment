# Enrichment 🛠

[![Netlify Status](https://api.netlify.com/api/v1/badges/af8560e9-4f5e-4584-bb6e-fa8494ce8fb6/deploy-status)](https://app.netlify.com/sites/enrichment/deploys)

This is a technical challenge done by Maxime Salomon for Clearbit.

## Project

Build a standalone tool/webpage which allows visitors to try our Enrichment product, and then captures their email. Timebox to a few hours or as you see fit.

You are free to use your creativity, but there is one requirement: The tool offers a max of 5 free enrichments before showing an email capture form.

## Stack

Frontend = React w/ Hooks + Styled-Components + axios

Backend = Express + pg

## Setup

git clone https://github.com/maximesalomon/enrichment.git

cd Backend

yarn install

Create a .env file at the root of /Backend with your CLEARBIT_SECRET_API_KEY

npx knex migrate:latest

yarn server

cd ..

cd Frontend

yarn install

yarn start


Maxime Salomon - maxime@croissant.io 🇫🇷