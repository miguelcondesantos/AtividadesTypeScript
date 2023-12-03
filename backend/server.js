const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fatec',
  database: 'atividadegerson',
});

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'fatec',
  database: 'atividadegerson',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/cliente', (req, res) => {
  const {
    nome,
    sobrenome,
    nomeSocial,
    telefone,
    email,
    genero,
    cpf,
    rg,
  } = req.body;

  const query = `
    INSERT INTO Cliente (nome, sobrenome, nomeSocial, telefone, email, genero, cpf, rg)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      res.status(500).send(`Internal Server Error: ${err.message}`);
      return;
    }

    connection.query(query, [nome, sobrenome, nomeSocial, telefone, email, genero, cpf, rg], (err, result) => {
      connection.release();

      if (err) {
        console.error('Error inserting data into Cliente table:', err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
      } else {
        console.log('Data inserted into Cliente table');
        res.status(200).send('Data inserted into Cliente table');
      }
    });
  });
});



app.post('/produto', (req, res) => {
  const { nomeProduto, preco } = req.body;

  const query = `
    INSERT INTO Produto (nomeProduto, preco)
    VALUES (?, ?)
  `;

  db.query(query, [nomeProduto, preco], (err, result) => {
    if (err) {
      console.error('Error inserting data into Produto table:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted into Produto table');
      res.status(200).send('Data inserted into Produto table');
    }
  });
});

app.post('/servico', (req, res) => {
  const { nomeServico, preco } = req.body;

  const query = `
    INSERT INTO Servico (nomeServico, preco)
    VALUES (?, ?)
  `;

  db.query(query, [nomeServico, preco], (err, result) => {
    if (err) {
      console.error('Error inserting data into Servico table:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted into Servico table');
      res.status(200).send('Data inserted into Servico table');
    }
  });
});

app.get('/cliente', (req, res) => {
  const query = 'SELECT * FROM Cliente';

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching clientes:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete('/cliente/:id', (req, res) => {
  const clienteId = req.params.id;

  const query = 'DELETE FROM Cliente WHERE id = ?';

  pool.query(query, [clienteId], (err, result) => {
    if (err) {
      console.error('Error deleting cliente:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Cliente deleted');
      res.status(200).send('Cliente deleted');
    }
  });
});

app.put('/cliente/:id', (req, res) => {
  const clientId = req.params.id;
  const {
    nome,
    sobrenome,
    nomeSocial,
    telefone,
    email,
    genero,
    cpf,
    rg,
  } = req.body;

  const query = `
    UPDATE Cliente
    SET nome=?, sobrenome=?, nomeSocial=?, telefone=?, email=?, genero=?, cpf=?, rg=?
    WHERE id=?
  `;

  pool.query(
    query,
    [nome, sobrenome, nomeSocial, telefone, email, genero, cpf, rg, clientId],
    (err, result) => {
      if (err) {
        console.error('Error updating data in Cliente table:', err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
      } else {
        console.log('Data updated in Cliente table');
        res.status(200).send('Data updated in Cliente table');
      }
    }
  );
});

app.get('/servico', (req, res) => {
  const query = 'SELECT * FROM Servico';

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching servicos:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete('/servico/:id', (req, res) => {
  const servicoId = req.params.id;

  const query = 'DELETE FROM Servico WHERE id = ?';

  pool.query(query, [servicoId], (err, result) => {
    if (err) {
      console.error('Error deleting servico:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Servico deleted');
      res.status(200).send('Servico deleted');
    }
  });
});

app.put('/servico/:id', (req, res) => {
  const servicoId = req.params.id;
  const { nomeServico, preco } = req.body;

  const query = `
    UPDATE Servico
    SET nomeServico=?, preco=?
    WHERE id=?
  `;

  pool.query(
    query,
    [nomeServico, preco, servicoId],
    (err, result) => {
      if (err) {
        console.error('Error updating data in Servico table:', err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
      } else {
        console.log('Data updated in Servico table');
        res.status(200).send('Data updated in Servico table');
      }
    }
  );
});

app.get('/produto', (req, res) => {
  const query = 'SELECT * FROM Produto';

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching produtos:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete('/produto/:id', (req, res) => {
  const produtoId = req.params.id;

  const query = 'DELETE FROM Produto WHERE id = ?';

  pool.query(query, [produtoId], (err, result) => {
    if (err) {
      console.error('Error deleting produto:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Produto deleted');
      res.status(200).send('Produto deleted');
    }
  });
});

app.put('/produto/:id', (req, res) => {
  const produtoId = req.params.id;
  const { nomeProduto, preco } = req.body;

  const query = `
    UPDATE Produto
    SET nomeProduto=?, preco=?
    WHERE id=?
  `;

  pool.query(
    query,
    [nomeProduto, preco, produtoId],
    (err, result) => {
      if (err) {
        console.error('Error updating data in Produto table:', err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
      } else {
        console.log('Data updated in Produto table');
        res.status(200).send('Data updated in Produto table');
      }
    }
  );
});


app.get('/clientesMaisConsumiram', (req, res) => {
  const query = `
  SELECT
    Cliente.id,
    Cliente.nome,
    COUNT(Consumo.id) as quantidade
  FROM Cliente
  JOIN Consumo ON Cliente.id = Consumo.idCliente
  GROUP BY Cliente.id
  ORDER BY quantidade DESC
  LIMIT 10;

  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching top consuming clients:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});


app.get('/clientesMenosConsumiram', (req, res) => {
  const query = `
    SELECT
      Cliente.id,
      Cliente.nome,
      COUNT(Consumo.id) as quantidade
    FROM Cliente
    LEFT JOIN Consumo ON Cliente.id = Consumo.idCliente
    GROUP BY Cliente.id
    ORDER BY quantidade ASC
    LIMIT 10;
  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching top consuming clients:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});


app.get('/clientesMaisConsumiramValor', (req, res) => {
  const query = `
    SELECT
      Cliente.id,
      Cliente.nome,
      SUM(Produto.preco) + SUM(Servico.preco) as valorTotal
    FROM Cliente
    LEFT JOIN Consumo ON Cliente.id = Consumo.idCliente
    LEFT JOIN Produto ON Consumo.idProduto = Produto.id
    LEFT JOIN Servico ON Consumo.idServico = Servico.id
    GROUP BY Cliente.id
    ORDER BY valorTotal DESC
    LIMIT 5;
  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching top spending clients:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});


app.get('/produtosMaisConsumidos', (req, res) => {
  const query = `
    SELECT Produto.nomeProduto, COUNT(Consumo.idProduto) as quantidade
    FROM Produto
    LEFT JOIN Consumo ON Produto.id = Consumo.idProduto
    GROUP BY Produto.nomeProduto
    ORDER BY quantidade DESC
    LIMIT 10;
  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching most consumed products:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});


app.get('/servicosMaisConsumidos', (req, res) => {
  const query = `
    SELECT Servico.nomeServico, COUNT(Consumo.idServico) as quantidade
    FROM Servico
    LEFT JOIN Consumo ON Servico.id = Consumo.idServico
    GROUP BY Servico.nomeServico
    ORDER BY quantidade DESC
    LIMIT 10;
  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching most consumed services:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/clientesFemininos', (req, res) => {
  const query = `
    SELECT
      Cliente.nome,
      Cliente.genero
    FROM Cliente
    WHERE Cliente.genero = 'Feminino'
    GROUP BY Cliente.nome
  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching female clients:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/clientesMasculinos', (req, res) => {
  const query = `
    SELECT
      Cliente.nome,
      Cliente.genero
    FROM Cliente
    WHERE Cliente.genero = 'Masculino'
    GROUP BY Cliente.nome
  `;

  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching male clients:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

