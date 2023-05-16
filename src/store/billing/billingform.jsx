import React from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

function Billingform() {
  // Define your ticket styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      padding: 30,
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: "center",
    },
    description: {
      fontSize: 14,
      marginBottom: 20,
      textAlign: "center",
    },
  });

  // Define the content of your ticket
  const Ticket = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Event Ticket</Text>
        <Text style={styles.description}>Join us for an amazing event!</Text>
        {/* Add more elements as needed */}
      </Page>
    </Document>
  );
  return (
    <div>
      <h1>Generate Ticket</h1>
      <PDFDownloadLink document={<Ticket />} fileName="event_ticket.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Ticket"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default Billingform;
