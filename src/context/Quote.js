import React, { Component } from "react";
import axios from "axios";

export const QuoteContext = React.createContext({});

const QuoteUrl =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export default class QuotesProvider extends Component {
  state = {
    quote: "",
  };

  getQuote = async () => {
    try {
      const res = await axios.get(QuoteUrl);
      const quotesArray = res.data.quotes;
      const quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
      this.setState({ quote });
    } catch (err) {
      this.setState({
        quote: { quote: "Error Fetching Quote", author: "Error" },
      });
    }
  };

  componentDidMount() {
    this.getQuote();
    console.log(this.state);
  }

  render() {
    const value = {
      ...this.state,
      getQuote: this.getQuote,
    };

    return (
      <QuoteContext.Provider value={value}>
        {this.props.children}
      </QuoteContext.Provider>
    );
  }
}
