import ChartSection from "./components/ChartSection"
import Header from "./components/Header"
import InputForm from "./components/InputForm"
import StatsCards from "./components/StatsCard"

const App = () => {
    return (
        <>
            <Header></Header>
            <InputForm></InputForm>
            <StatsCards></StatsCards>
            <ChartSection></ChartSection>
        </>
    )
}

export default App
