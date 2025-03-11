import ListingManagement from "../../components/listing-management";

const AdminListing = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <ListingManagement />
      <ListingManagement />
      <ListingManagement />
    </div>
  );
};

export default AdminListing;
