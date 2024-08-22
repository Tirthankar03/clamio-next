"use client";
import React, { useState } from "react";
import { addresses } from "@/constants/data";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema
const addressSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  pincode: z.string().min(6, "Pincode must be at least 6 digits"),
  line1: z.string().min(1, "Address line 1 is required"),
  line2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required").default("India"),
  landmark: z.string().optional(),
  isDefault: z.boolean().optional(),
});

type AddressFormValues = z.infer<typeof addressSchema>;

export default function Addresses() {
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    null
  );
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      country: "India",
      isDefault: false,
    },
  });

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleDialogClose = () => {
    setIsModalOpen(false);
    reset(); // Reset the form when closing
  };

  const onSubmit = (data: AddressFormValues) => {
    console.log("Form Data:", data);
    // Save address logic here
    setIsModalOpen(false);
  };

  return (
    <div className="w-5/6 md:w-5/6 lg:w-full mx-auto my-10">
      <h1 className="text-4xl font-bold mb-10">Your Addresses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-100"
          onClick={handleClick}
        >
          <span className="text-4xl">+</span>
          <span>Add address</span>
        </div>
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`flex flex-col justify-between shadow-md hover:shadow-lg transition duration-300 p-4 rounded-lg border ${selectedAddressId === address.id ? "border-blue-500" : "border-transparent"}`}
            onClick={() => setSelectedAddressId(address.id)}
          >
            <div>
              {address.isDefault && (
                <div className="text-xs text-gray-500 mb-2">Default:</div>
              )}
              <h2 className="text-lg font-semibold">{address.name}</h2>
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>
                {address.city}, {address.state} {address.zip}
              </p>
              <p>{address.country}</p>
              <p className="mt-2">Phone number: {address.phone}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="text-blue-500 hover:underline">Edit</button>
              <button className="text-blue-500 hover:underline">Remove</button>
              {!address.isDefault && (
                <button className="text-blue-500 hover:underline">
                  Set as Default
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[525px] bg-white">
          <DialogHeader>
            <DialogTitle>Add a new address</DialogTitle>
            <DialogDescription className="py-1">
              Please fill in the details to add a new address.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div>
                <Label className="block text-sm font-medium">Full name</Label>
                <Input
                  type="text"
                  {...register("name")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label className="block text-sm font-medium">
                  Mobile number
                </Label>
                <Input
                  type="text"
                  {...register("phone")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <Label className="block text-sm font-medium">Pincode</Label>
                <Input
                  type="text"
                  {...register("pincode")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.pincode && (
                  <p className="text-red-500">{errors.pincode.message}</p>
                )}
              </div>
              <div>
                <Label className="block text-sm font-medium">
                  Flat, House no., Building, Company, Apartment
                </Label>
                <Input
                  type="text"
                  {...register("line1")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.line1 && (
                  <p className="text-red-500">{errors.line1.message}</p>
                )}
              </div>
              <div>
                <Label className="block text-sm font-medium">
                  Area, Street, Sector, Village
                </Label>
                <Input
                  type="text"
                  {...register("line2")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.line2 && (
                  <p className="text-red-500">{errors.line2.message}</p>
                )}
              </div>
              <div>
                <Label className="block text-sm font-medium">Landmark</Label>
                <Input
                  type="text"
                  {...register("landmark")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.landmark && (
                  <p className="text-red-500">{errors.landmark.message}</p>
                )}
              </div>
              <div>
                <Label className="block text-sm font-medium">Town/City</Label>
                <Input
                  type="text"
                  {...register("city")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.city && (
                  <p className="text-red-500">{errors.city.message}</p>
                )}
              </div>
              <div>
                <Label className="block text-sm font-medium">State</Label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <div className="mt-1 block w-full p-2 border border-gray-300 rounded">
                      <Select {...field} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Assam">Assam</SelectItem>
                            {/* Add other states as options */}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
                {errors.state && (
                  <p className="text-red-500">{errors.state.message}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="checkbox"
                  {...register("isDefault")}
                  className="mr-2"
                />
                <Label className="text-sm font-medium">
                  Make this my default address
                </Label>
              </div>
            </div>
            <div className="flex justify-end mt-6 gap-2">
              <Button type="submit">Add address</Button>
              <Button type="button" onClick={handleDialogClose}>
                Close
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
