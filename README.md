



# Goodreads Book Analysis and Network Construction

## Introduction

This project aims to analyze the Goodreads book dataset and construct various networks based on the data. The main objectives of this project are:

1. Construct a user network based on book reviews.
2. Construct a network of similar books based on book data.
3. Analyze the popularity of books and genres over time.
4. Perform network analysis and visualization on the constructed networks.

## Dataset

The dataset used in this project is the Goodreads book dataset, which contains information about books, authors, and user reviews. The dataset is in JSON format and can be found in the `dataset` directory. The relevant files are:

- `goodreads_books.json`: Contains information about books, including title, authors, publisher, publication year, and similar books.
- `goodreads_reviews_dedup.json`: Contains user reviews, including book ID, user ID, rating, and date added.
- `goodreads_book_genres_initial.json`: Contains genre information for books.


## 1. `authors_network.py`

This script creates a network of authors based on their co-authorship of books. The main tasks performed by this script are:

- Building an undirected graph `G` where nodes represent authors, and edges connect authors who have co-authored at least one book.
- Calculating network properties such as density, number of edges and nodes, average degree, connected components, and average clustering coefficient.
- Visualizing the degree distribution of the network.
- Identifying and visualizing communities within the network using the Louvain method for community detection.
- Calculating and visualizing PageRank scores to identify influential authors.

## 2. `Goodreads.py`

This script focuses on analyzing the book similarity network and identifying the most popular and best-rated authors. The main tasks performed by this script are:

- Loading the `goodreads_books.json` dataset and creating a DataFrame `books`.
- Creating an interaction dataset by removing irrelevant columns from `books`.
- Building a graph `G` where nodes represent books, and edges connect books that are listed as similar.
- Visualizing the book similarity network.
- Detecting communities within the network using the Louvain method.
- Identifying the most popular authors based on the number of connections (similar books) in the network.
- Identifying the best-rated authors based on the average rating of their books.

## 3. `similar_books.py`

This script analyzes the network of similar books and calculates various network properties. The main tasks performed by this script are:

- Loading the `goodreads_books.json` dataset and creating a DataFrame `books`.
- Creating an interaction dataset by removing irrelevant columns from `books`.
- Building a graph `G` where nodes represent books, and edges connect books that are listed as similar.
- Calculating the degree distribution of the network.
- Counting the total number of unique nodes (books) and edges in the network.
- Calculating the average path length of the connected components in the network.
- Calculating the average clustering coefficient of the network.
- Calculating the diameter of the largest connected component in the network.
- Optionally, visualizing the network.


## 4. `users_network2.ipynb`

The file `users_network2.ipynb` contains code for constructing a user network based on the book reviews. The network is created by connecting users who have rated the same book. The code performs the following steps:

1. Read the book data and user review data from the JSON files.
2. Filter the book data to include only books published between 1980 and 2017, with a maximum of 1000 books per year.
3. Process the user review data to create interactions between users and books.
4. Construct the user network by connecting users who have rated the same book.
5. Analyze the network properties, such as degree distribution, average path length, and average clustering coefficient.
6. Perform community detection using various algorithms (e.g., Louvain, Greedy Modularity).
7. Calculate node importance measures (e.g., PageRank, Closeness Centrality, Degree Centrality, Betweenness Centrality).



## Genre Analysis

The `book_network.txt` file contains code for analyzing the popularity of books and genres over time. It performs the following steps:

1. Read the book genre data from the JSON file.
2. Calculate the average rating, number of ratings, and number of books for each genre.
3. Analyze the genre distribution and popularity over time.

## 6. `Visualization_data.ipynb`

The `Visualization_data.ipynb` file includes code for analyzing and visualizing the constructed networks. The analysis includes:

1. Visualization of network properties (degree distribution, clustering coefficient, etc.).
2. Community detection using various algorithms (Louvain, Greedy Modularity, etc.).
3. Calculation of node importance measures (PageRank, Closeness Centrality, Degree Centrality, Betweenness Centrality).
4. Visualization of network communities based on genres.

The code uses libraries such as NetworkX, pandas, matplotlib, and community for network analysis and visualization.

## Usage

To use this project, you need to have Python and the required libraries installed. The required libraries can be installed using env.yaml

1. Clone or download the project repository.
2. Place the dataset files (`goodreads_books.json`, `goodreads_reviews_dedup.json`, and `goodreads_book_genres_initial.json`) in the `dataset` directory.
3. Run the code files individually.

Note: You may need to modify file paths or other parameters to work correctly with your local setup.

## References:
Book genre trends:
https://observablehq.com/d/6c2122f0341d1212

Book popularity trends:
https://observablehq.com/d/9e49b9059f62929b

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.