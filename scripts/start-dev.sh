#!/bin/bash
bundle install --with development test
rm -rf tmp/pids/*
