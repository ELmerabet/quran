
import MainContent from "../components/PrayerTimeComponents/MainContent"
import { Container } from "@mui/material";

function SalatTime() {
  

  return (
    <div className="">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Container maxWidth="xl">
          <MainContent />
        </Container>
      </div>
    </div>
  );
}

export default SalatTime;
