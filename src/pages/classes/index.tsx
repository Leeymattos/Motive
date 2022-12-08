import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Produtos from "../../models/produto";
import api from "../../services/api";
import MediaCard from "../../components/dynamics/card";

export default function Classes() {
  const [produtos, setProdutos] = useState<Produtos[]>([])

  async function BuscaProduto() {
    const res = await api.get('produto');
    setProdutos(res.data);
  }

  useEffect(() => {
    BuscaProduto()
  }, [produtos.length])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "calc(100vh - 140px)" }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '30px', marginY: '30px' }} > Aulas </Typography>
      <Grid container sx={{ width: '90%', overflow: "auto" }}>
        {produtos.map(produto => (
          <Grid item xs={4}>
            <MediaCard titulo={produto.nome} local={produto.local} key={produto.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}