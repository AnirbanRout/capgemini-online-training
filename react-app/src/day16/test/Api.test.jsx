import { findByText, render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import axios from "axios";
import Api from "../components/Api";

vi.mock("axios");

describe("Api Component", () => {
  test("fetches data and shows correct length", async () => {
    const mockData = [
      { id: 1, name: "Anu" },
      { id: 2, name: "Rahul" },
      { id: 3, name: "Sneha" },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });
    render(<Api />);
    const lengthText = await screen.findByText(/Length:/i);
    expect(lengthText).toHaveTextContent("Length: 3");
  });

  test("handles empty data", async () => {
    axios.get.mockResolvedValueOnce({ data: [] });
    render(<Api />);
    const lengthText = await screen.findByText(/Length:/i);
    expect(lengthText).toHaveTextContent("Length: 0");
  });

  test("name from first user is displayed correctly", async () => {
    const mockData = [
      { id: 1, name: "Anu" },
      { id: 2, name: "Rahul" },
      { id: 3, name: "Sneha" },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });
    render(<Api />);
    const nameText = await screen.findByText(/Anu/i);
    expect(nameText).toBeInTheDocument();
  });
});
