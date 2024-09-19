import Layout from "@/components/layout";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    category: "",
    summary: "",
    description: "",
    criminalHistory: "No Previous History",
  });

  const setLocalStorageItem = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const linkMap = {
    "Related to Income Tax": "/incomeTax",
    "Related to Labour Law": "/labourLaw",
    "Related to Business Law": "/businessLaw",
  };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto m-4">
        <div className="text-xl md:text-4xl py-8 text-center">
          👨‍💻 Enter your case details below :
        </div>
        <div className="md:w-[40vw] mx-auto border border-gray-200 shadow-lg m-4 rounded-lg p-8">
          <FormControl className="flex flex-col gap-6">
            <div>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={input.name}
                placeholder="Enter your name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={input.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <FormLabel>Age</FormLabel>
              <Input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={input.age}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <FormLabel>Select Your Case Category:</FormLabel>
              <Select
                name="category"
                placeholder="Select option"
                onChange={handleInputChange}
              >
                <option value="Related to Income Tax">Related to Income Tax</option>
                <option value="Related to Business Law">Related to Business Law</option>
                <option value="Related to Labour Law">Related to Labour Law</option>
              </Select>
            </div>
            <hr />
            <div className="text-lg">Describe your case to us :</div>
            <div>
              <FormLabel>Summary of your problem :</FormLabel>
              <Textarea
                name="summary"
                value={input.summary}
                onChange={handleInputChange}
              />
              <FormHelperText>
                Explain your problem in brief
              </FormHelperText>
            </div>
            <div>
              <FormLabel>Description :</FormLabel>
              <Textarea
                name="description"
                value={input.description}
                onChange={handleInputChange}
                placeholder="How it started ? \nHow is it affecting you ? \nWhat steps have you taken till now ?"
              />
              <FormHelperText>
                Provide the description of how your case started
              </FormHelperText>
            </div>
            <div>
              <FormLabel>Criminal History (Optional) :</FormLabel>
              <Textarea
                name="criminalHistory"
                value={input.criminalHistory}
                onChange={handleInputChange}
              />
              <FormHelperText>
                Criminal History if you have any (Optional)
              </FormHelperText>
            </div>
            <Link href={linkMap[input.category as keyof typeof linkMap] ?? ""}>
              <Button
                colorScheme="blue"
                onClick={() => {
                  setLocalStorageItem("input", input);
                  console.log(input);
                }}
              >
                Submit your Details
              </Button>
            </Link>
          </FormControl>
        </div>
      </div>
    </Layout>
  );
}