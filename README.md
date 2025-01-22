# Node.js Server Unresponsiveness Under Load

This repository demonstrates a common issue in Node.js applications: server unresponsiveness under heavy load.  The included example simulates a scenario where a delay in request handling can lead to the server appearing to hang.

## Problem

The `server.js` file contains a simple HTTP server that introduces a 5-second delay for each request. Under normal conditions, this is not a major problem. However, if a large number of requests are made concurrently, the server's event loop becomes blocked, leading to unresponsiveness and potentially a complete hang. 

## Solution

The `serverSolution.js` provides one solution demonstrating proper handling of asynchronous operations with promises, avoiding blocking the main thread.